import * as React from 'react';
import Icon from '~components/common/Icon';

interface GenericSectionProps {
  title: string;
  subtitle: string | React.ReactNode;
  icon: string;
  children?: React.ReactNode;
}

const GenericSection: React.FunctionComponent<GenericSectionProps> = ({
  title,
  subtitle,
  icon,
  children,
}: GenericSectionProps) => (
  <>
    <div>
      <h1 className="title">
        <Icon icon={icon} className="has-text-info" /> {title}
      </h1>
      <h2 className="subtitle ">
        <Icon icon="angle-right" /> {subtitle}
      </h2>
    </div>
    {children}
  </>
);

export default GenericSection;
