/* eslint-disable react/prop-types */

const Button = ({ title, style }) => {
    return (
        <button className={style}>
            {title}
        </button>
    );
};

export default Button;