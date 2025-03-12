/* common modal types */
export interface IModalContainer {
  children: React.ReactNode;
}

export interface IModalHeaderProps {
  headerText: string;
}

export interface IModalBodyProps {
  bodyText: string;
}

export interface IModalButtonProps {
  buttonText: string;
  onButtonClick: () => void;
}

/* interest & job modal types */
export interface IModalProps {
  onButtonClick: (props: string[]) => void;
}
