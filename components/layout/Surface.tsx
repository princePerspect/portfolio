import styles from './Surface.module.css';

interface SurfaceProps {
  children: React.ReactNode;
  roundedTop?: boolean;
  roundedBottom?: boolean;
}

export default function Surface({
  children,
  roundedTop = false,
  roundedBottom = false,
}: SurfaceProps) {
  return (
    <div
      className={[
        styles.surface,
        roundedTop ? styles.roundedTop : '',
        roundedBottom ? styles.roundedBottom : '',
      ].join(' ')}
    >
      {children}
    </div>
  );
}
