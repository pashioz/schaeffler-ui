import { ElementRef, OnInit } from '@angular/core';
export declare class SuiSectionComponent implements OnInit {
    constructor(el: ElementRef);
    tagName: string;
    componentName: string;
    users: {
        id: number;
        name: string;
    }[];
    ngOnInit(): void;
}
