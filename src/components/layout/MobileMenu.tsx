
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { List, Search } from 'lucide-react';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <List className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="grid gap-6 py-6">
          <Button variant="outline" className="flex items-center justify-start gap-2">
            <Search className="h-4 w-4" />
            <span>Search</span>
          </Button>
          <div className="grid gap-3">
            <Link 
              to="/" 
              className="text-base font-medium p-2 hover:bg-accent rounded-md" 
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-base font-medium p-2 hover:bg-accent rounded-md" 
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/quote" 
              className="text-base font-medium p-2 hover:bg-accent rounded-md" 
              onClick={() => setOpen(false)}
            >
              Request Quote
            </Link>
            <Link 
              to="/news" 
              className="text-base font-medium p-2 hover:bg-accent rounded-md" 
              onClick={() => setOpen(false)}
            >
              News
            </Link>
            <Link 
              to="/about" 
              className="text-base font-medium p-2 hover:bg-accent rounded-md" 
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
