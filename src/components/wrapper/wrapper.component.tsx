import Menu from "../menu/menu.component";

interface IProps {
  child: JSX.Element;
}

export default function Wrapper(props: IProps) {
  const { child } = props;

  return (
    <>
      <Menu />
      {child}
    </>
  );
}
