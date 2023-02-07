export interface DataItem {
    id: string;
    title: string;
    description: string;
    siteurl?: string; 
    appurl?: string;
    source?: string;
    nativepub?: string; 
    nativesource?: string;
    docker?: string; 
    siteimg?: string; 
    mobileimg?: string; 
    priority: number;
    contentHtml: string;
}


/*
export interface LayoutProps {
    children: React.ReactNode;
    home?: boolean; 
}
*/