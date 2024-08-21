import { type ReactNode } from 'react';

// type InfoBoxProps = {
//   mode: 'hint' | 'warning'; // two specific strings // union type
//   severity: 'low' | 'medium' | 'high'; // from index.css // union and literal type
//   children: ReactNode;
// };

type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
};

type WarningBoxProps = {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

// export default function InfoBox({ mode, severity, children }: InfoBoxProps) {

export default function InfoBox(props: InfoBoxProps) {
  /// destructuring children prop from props object.
  const { children, mode } = props;
  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  // return <aside>{mode === 'warning' ? <h2>{warning}</h2> : null}</aside>; // ternary expression

  // if the mode is not hint - it will come to severity prop.
  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
