
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Quote = () => {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get('product');
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    product: preselectedProduct || '',
    quantity: '',
    frequency: 'one-time',
    specifications: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log('Quote request submitted:', formData);
    
    toast({
      title: "Quote request submitted",
      description: "We'll get back to you within 1-2 business days.",
    });

    // Reset form (optional)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      product: '',
      quantity: '',
      frequency: 'one-time',
      specifications: ''
    });
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Request a Quote</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Fill out the form below to request pricing for our chemical products. Our team will
            get back to you with a detailed quote within 1-2 business days.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Information</CardTitle>
                  <CardDescription>
                    Please provide your contact information so we can send you the quote.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization *</Label>
                    <Input 
                      id="company" 
                      value={formData.company}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Product Information</CardTitle>
                  <CardDescription>
                    Tell us what products you're interested in and any specific requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="product">Product *</Label>
                    <Select 
                      value={formData.product} 
                      onValueChange={(value) => handleSelectChange('product', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">-- Select a product --</SelectItem>
                        <SelectItem value="1">Sodium Chloride (99.9%)</SelectItem>
                        <SelectItem value="2">Methylene Blue Solution</SelectItem>
                        <SelectItem value="3">Silver Nitrate Crystals</SelectItem>
                        <SelectItem value="4">Acetone (HPLC Grade)</SelectItem>
                        <SelectItem value="5">Copper Sulfate Pentahydrate</SelectItem>
                        <SelectItem value="6">Ethanol (Absolute)</SelectItem>
                        <SelectItem value="7">Potassium Permanganate</SelectItem>
                        <SelectItem value="8">Hexane (Analytical Grade)</SelectItem>
                        <SelectItem value="custom">Custom Formulation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity Needed *</Label>
                    <Input 
                      id="quantity" 
                      type="text"
                      value={formData.quantity}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Purchase Frequency</Label>
                    <Select 
                      value={formData.frequency} 
                      onValueChange={(value) => handleSelectChange('frequency', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-time">One-time purchase</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="annually">Annually</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="specifications">Additional Specifications</Label>
                    <Textarea 
                      id="specifications"
                      value={formData.specifications}
                      onChange={handleChange}
                      placeholder="Please provide any specific requirements, grade needed, or questions about the product."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Button type="submit" className="w-full sm:w-auto">Submit Quote Request</Button>
            </form>
          </div>
          
          <div>
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-chembrand-100 text-chembrand-600 font-medium">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Submit your request</h4>
                        <p className="text-sm text-gray-500">
                          Fill out the form with your product requirements and contact information.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-chembrand-100 text-chembrand-600 font-medium">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">We'll prepare your quote</h4>
                        <p className="text-sm text-gray-500">
                          Our team will review your requirements and prepare a detailed quote.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-chembrand-100 text-chembrand-600 font-medium">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Receive your quote</h4>
                        <p className="text-sm text-gray-500">
                          We'll email you a detailed quote within 1-2 business days.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-chembrand-100 text-chembrand-600 font-medium">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Finalize your order</h4>
                        <p className="text-sm text-gray-500">
                          Review the quote, and our sales team will assist you with placing your order.
                        </p>
                      </div>
                    </li>
                  </ol>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-md">
                    <h4 className="text-sm font-medium mb-2">Need Help?</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Our customer service team is available to assist with any questions about our products.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:sales@chemsolutions.example.com">Contact Sales Team</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Quote;
