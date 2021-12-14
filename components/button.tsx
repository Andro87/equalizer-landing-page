import { ReactNode } from "react";
import styles from "./button.module.scss";

interface Props {
    readonly color: string;
    readonly icon: ReactNode;
    readonly title: string;
    readonly colorBtn: string;
}

const Button: React.FunctionComponent<Props> = props => {
    const { color, icon, title, colorBtn } = props;
    return (
        <div className={`${styles.wrap} ${styles[color]}`}>
            {icon}
            <button
                type="button"
                title="button"
                className={`${styles.btn} ${styles[colorBtn]}`}
            >
                {title}
            </button>
        </div>
    );
};
export default Button;
