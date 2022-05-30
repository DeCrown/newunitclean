// For CSS
declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.svg" {
    const content: string;
    export default content;
}

declare module "*.png" {
    const content: any;
    export default content;
}

declare module "*.jpg" {
    const content: any;
    export default content;
}

declare module "react-export-table-to-excel"