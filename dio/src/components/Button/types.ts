export interface IButton{
    onClick?: () => void;
    title: string;
    variant?: string;
    type?: string; 
}

export interface IButtonStyled{
    variant: string;
}