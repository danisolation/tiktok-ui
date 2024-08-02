import classNames from "classnames/bind";
import styles from "./Box.module.scss";
import { Link } from "react-router-dom";
import images from "../../assets/images/images";

const cx = classNames.bind(styles);

function Box({
  to,
  ver = false,
  hori = false,
  style,
  children,
  id,
  className,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Comp = "div";
  const props = {
    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  }
  const classes = cx("wrapper", {
    [className]: className,
    ver,
    hori,
  });
  return (
    <Comp id={id} className={classes} {...props}>
      <div style={style} className={cx("blog")}>
        <a className={cx("imgBlock")}>
            <img loading="lazy" src={images.bgp}/>
        </a>
        <a></a>
        <div className={cx("info")}>
            <div>
                <p className={cx("text")}>Lượt xem: 1.9M</p>
                <p className={cx("chapBox")}>Chap 34</p>
            </div>
        </div>
        <a>sdawd</a>
      </div>
    </Comp>
  );
}

export default Box;