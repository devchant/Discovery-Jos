'use client';

import { useState, useMemo } from 'react';
import { tours } from '@/lib/data';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Users, Calendar as CalendarIcon, Wallet, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react';
import { format, addDays, isSunday, isBefore, startOfToday, differenceInDays } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { useLoader } from '@/components/loader-provider';

export default function BookingPage() {
  const { startLoading, stopLoading, isLoading: isGlobalLoading } = useLoader();
  const [selectedTourId, setSelectedTourId] = useState<string>(tours[0].id.toString());
  const [participants, setParticipants] = useState<number | undefined>(undefined);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock "already booked" dates
  const bookedDates = useMemo(() => [
    addDays(startOfToday(), 3),
    addDays(startOfToday(), 5),
    addDays(startOfToday(), 12),
  ], []);

  const selectedTour = useMemo(() => 
    tours.find(t => t.id.toString() === selectedTourId) || tours[0]
  , [selectedTourId]);

  const numberOfDays = useMemo(() => {
    if (!dateRange?.from || !dateRange?.to) return 1;
    return differenceInDays(dateRange.to, dateRange.from) + 1;
  }, [dateRange]);

  const totalPrice = selectedTour.price * (participants || 0) * numberOfDays;

  const disabledDates = (d: Date) => {
    return isSunday(d) || isBefore(d, startOfToday()) || bookedDates.some(booked => 
      format(booked, 'yyyy-MM-dd') === format(d, 'yyyy-MM-dd')
    );
  };

  const handlePayment = () => {
    if (!participants || !dateRange?.from) return;
    startLoading();
    // Mocking Flutterwave payment flow
    setTimeout(() => {
      stopLoading();
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center p-6 bg-gray-50">
          <Card className="max-w-md w-full text-center p-8 animate-in fade-in zoom-in duration-500">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle2 className="w-16 h-16 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-3xl font-black mb-4">Adventure Booked!</CardTitle>
            <CardDescription className="text-lg mb-8">
              Thank you for choosing Discovery Jos. We've sent the booking details for {participants} participants to your email. Get ready for an authentic Plateau experience!
            </CardDescription>
            <Button onClick={() => window.location.href = '/'} className="w-full h-14 text-lg font-bold">
              Back to Home
            </Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground mb-4">
              Book Your <span className="text-primary">Adventure</span>
            </h1>
            <p className="text-xl text-foreground/60">Fill in the details below to secure your spot.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-foreground text-white p-8">
                  <CardTitle className="text-2xl">Adventure Details</CardTitle>
                  <CardDescription className="text-white/60">Choose your destination and schedule</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  {/* Adventure Selection Cards */}
                  <div className="space-y-4">
                    <Label className="text-xl font-bold">Select Your Adventure</Label>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {tours.map((tour) => {
                        const isSelected = selectedTourId === tour.id.toString();
                        return (
                          <div
                            key={tour.id}
                            onClick={() => setSelectedTourId(tour.id.toString())}
                            className={`group cursor-pointer relative rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                              isSelected 
                                ? 'border-primary bg-primary/5 ring-4 ring-primary/10' 
                                : 'border-border bg-white hover:border-primary/50'
                            }`}
                          >
                            <div className="flex h-full">
                              <div className="relative w-32 h-full min-h-[140px] shrink-0">
                                <img
                                  src={tour.image}
                                  alt={tour.title}
                                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              </div>
                              <div className="p-4 flex flex-col justify-between">
                                <div>
                                  <h3 className="font-bold text-lg mb-1 leading-tight">{tour.title}</h3>
                                  <p className="text-xs text-muted-foreground line-clamp-2">{tour.description}</p>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                  <span className="text-primary font-black">₦{tour.price.toLocaleString()}</span>
                                  {isSelected && (
                                    <div className="bg-primary text-white p-1 rounded-full">
                                      <CheckCircle2 size={16} />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Participants */}
                    <div className="space-y-3">
                      <Label className="text-lg font-bold">Number of Participants</Label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input 
                          type="number" 
                          min={1} 
                          placeholder="How many people?"
                          value={participants || ''} 
                          onChange={(e) => setParticipants(e.target.value ? parseInt(e.target.value) : undefined)}
                          className="h-14 pl-12 text-lg rounded-xl border-2"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">Price increases with participants</p>
                    </div>

                    {/* Date Picker */}
                    <div className="space-y-3">
                      <Label className="text-lg font-bold">Preferred Date</Label>
                      <div className="p-4 border-2 rounded-2xl bg-white shadow-inner flex justify-center">
                        <Calendar
                          mode="range"
                          selected={dateRange}
                          onSelect={setDateRange}
                          disabled={disabledDates}
                          className="rounded-md"
                          modifiers={{
                            booked: bookedDates
                          }}
                          modifiersClassNames={{
                            booked: "bg-red-100 text-red-400 line-through cursor-not-allowed"
                          }}
                        />
                      </div>
                      <div className="flex gap-4 text-xs font-semibold text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-red-100 rounded-sm" /> Booked/Sun
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-primary rounded-sm" /> Selected
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-3">
                    <Label className="text-lg font-bold">Additional Notes</Label>
                    <Textarea 
                      placeholder="Any special requirements, dietary restrictions, or extra information?"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="min-h-[120px] text-lg rounded-xl border-2 p-4"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary Section */}
            <div className="space-y-8">
              <Card className="border-none shadow-2xl rounded-3xl sticky top-24">
                <CardHeader className="p-8 border-b">
                  <CardTitle className="text-2xl font-black">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-muted-foreground">Base Price ({selectedTour.title})</span>
                    <span className="font-bold">₦{selectedTour.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-muted-foreground">Participants</span>
                    <span className="font-bold">x {participants}</span>
                  </div>
                  {dateRange?.from && (
                    <div className="flex flex-col gap-1 text-lg">
                      <span className="text-muted-foreground italic text-sm">Tour Duration</span>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Dates</span>
                        <div className="text-right">
                          <span className="font-bold text-primary block">
                            {format(dateRange.from, 'MMM d')} 
                            {dateRange.to ? ` - ${format(dateRange.to, 'MMM d, yyyy')}` : ''}
                          </span>
                          <span className="text-xs text-muted-foreground">({numberOfDays} {numberOfDays === 1 ? 'day' : 'days'})</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-6 border-t">
                    <div className="flex justify-between items-end">
                      <span className="text-xl font-bold">Total Amount</span>
                      <span className="text-4xl font-black text-primary">₦{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-8 pt-0 flex flex-col gap-4">
                  <Button 
                    disabled={!participants || !dateRange?.from || isGlobalLoading}
                    onClick={handlePayment}
                    className="w-full h-16 text-xl font-black rounded-2xl shadow-lg hover:scale-[1.02] transition-all active:scale-95"
                  >
                    {isGlobalLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Pay with Flutterwave
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
                    <CreditCard className="w-3 h-3" /> Secure checkout powered by Flutterwave
                  </p>
                </CardFooter>
              </Card>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
