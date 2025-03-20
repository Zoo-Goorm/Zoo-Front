interface ButtonProps {
  addImg: [string, () => void];
  vote: [string, () => void];
  time: [string, () => void];
}

export const ButtonList: ButtonProps = {
  addImg: ['/button/AddImage.svg', () => console.log('Add Image clicked')],
  vote: ['/button/vote.svg', () => console.log('Vote clicked')],
  time: ['/button/time.svg', () => console.log('Time clicked')],
};
