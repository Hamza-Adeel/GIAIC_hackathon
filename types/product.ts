export interface Chef {
    name: string;
    position: string;
    experience: number;
    specialty: string;
    image?: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
    description?: string;
    available: boolean;
  }
  
  export interface Food {
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    tags?: string[];
    image?: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
    description?: string;
    available: boolean;
  }
  