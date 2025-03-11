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
