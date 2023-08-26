export const CustomText = ({
  fontSize,
  lineHeight,
  fontWeight,
  color,
  text,
  additionalClasses,
}) => {
  const style = {
    fontSize,
    lineHeight,
    fontWeight,
    color,
  };
  return (
    <span style={style} className={additionalClasses}>
      {text}
    </span>
  );
};
