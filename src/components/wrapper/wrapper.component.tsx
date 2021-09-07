import Menu from "../menu/menu.component";
interface IwrapperProps {
  child: JSX.Element;
}

export default function Wrapper(props: IwrapperProps) {
  const { child } = props;
  return (
    <>
      <Menu />
      {child}
    </>
  );
}
