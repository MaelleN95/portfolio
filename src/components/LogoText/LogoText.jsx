function LogoText(props) {
  const light = props.light ? 'light' : null;
  const noAutoscroll = props.noAutoscroll ? 'no-autoscroll' : null;
  const rounded = props.rounded ? 'rounded' : '';

  return (
    <li className={`hard-skill ${props.direction} ${noAutoscroll}`}>
      <img
        className={`${rounded} ${light}`}
        src={props.logo}
        alt={`logo ${props.title}`}
      />
      {props.link ? (
        <a href={props.link} title={`Lien vers ${props.children}`}>
          {props.children}
        </a>
      ) : (
        <p>{props.children}</p>
      )}
    </li>
  );
}
export default LogoText;
