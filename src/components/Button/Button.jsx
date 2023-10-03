/* eslint-disable react/prop-types */

const Button = ({ title, style,onClick }) => {
    return (
        <button className={style} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;