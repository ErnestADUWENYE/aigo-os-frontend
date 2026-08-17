import type { ReactNode } from "react";

import styles from "./public-container.module.css";

type PublicContainerProps = {
  children: ReactNode;
  className?: string;
};

export function PublicContainer({
  children,
  className = "",
}: PublicContainerProps) {
  return (
    <div className={styles.gutter}>
      <div className={`${styles.container} ${className}`}>
        {children}
      </div>
    </div>
  );
}
