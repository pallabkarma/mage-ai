import { css } from 'styled-components';
import { UNIT } from '../themes/spaces';
import borders, { bordersTransparent } from './borders';
import text, { StyleProps as TextStyleProps } from './typography';
import { outlineHover, transition, transitionFast } from './mixins';

export type StyleProps = {
  aslink?: boolean;
  backgroundcolor?: string;
  basic?: boolean;
  bordercolor?: string;
  grouped?: boolean | string;
  loading?: boolean;
  plain?: boolean;
  primary?: boolean;
  secondary?: boolean;
  small?: boolean;
  tag?: React.ReactNode | string | number;
  wrap?: boolean | string;
} & TextStyleProps;

const shared = css<StyleProps>`
  ${({ aslink, plain }) => !plain && (aslink ? transitionFast : transition)}
  ${text}
  position: relative;
  z-index: 1;

  ${({ aslink, basic, bordercolor, grouped, plain, primary, secondary, theme, wrap }) =>
    !plain &&
    outlineHover({
      borderColor: theme.fonts.color.text.inverted,
      outlineColor: (aslink && wrap)
        ? theme.colors.blueText
        : (theme.colors?.[bordercolor] ?? bordercolor) ?? primary
          ? theme.buttons.outline.color.primary.hover
          : secondary
            ? theme.buttons.outline.color.secondary.hover
            : aslink || basic
              ? theme.buttons.outline.color.basic.hover
              : theme.buttons.outline.color.base.hover,
      outlineOffset: wrap ? 0 : grouped ? UNIT : undefined,
      outlineWidth: wrap ? 0 : undefined,
    })}

  ${({ aslink, grouped, plain, wrap }) =>
    (aslink || grouped || plain || wrap) &&
    `
    border: none !important;
  `}

  ${({ aslink, basic, grouped, plain }) => !aslink && !grouped && !plain && basic && borders}
  ${({ aslink, basic, bordercolor, grouped, plain, primary, secondary, theme }) =>
    !aslink &&
    !grouped &&
    !plain &&
    basic &&
    `
    border-color: ${(theme.colors?.[bordercolor] ?? bordercolor) ?? (primary
      ? theme.buttons.border.color.primary.default
      : secondary
        ? theme.buttons.border.color.secondary.default
        : basic
          ? theme.buttons.border.color.basic.default
          : theme.buttons.border.color.base.default)
    };
  `}

  ${({ aslink, basic, grouped, plain, primary, secondary, theme }) =>
    !grouped &&
    !plain &&
    (aslink || basic) &&
    `
    &:hover {
      border-color: ${primary
      ? theme.buttons.border.color.primary.hover
      : secondary
        ? theme.buttons.border.color.secondary.hover
        : aslink || basic
          ? theme.buttons.border.color.basic.hover
          : theme.buttons.border.color.base.hover
    };
    }
  `}

  ${({ basic, grouped }) => !grouped && !basic && bordersTransparent}

  background-color: ${({ aslink, backgroundcolor, basic, plain, primary, secondary, theme }) =>
    (theme.colors?.[backgroundcolor] ?? backgroundcolor) ?? (
      !plain &&
      (aslink
        ? 'transparent'
        : primary
          ? theme.colors.backgrounds.button.primary.default
          : secondary
            ? theme.colors.backgrounds.button.secondary.default
            : basic
              ? theme.colors.backgrounds.button.basic.default
              : theme.colors.backgrounds.button.base.default)
    )};
  border-radius: ${({ aslink, plain, theme, wrap }) =>
    !plain && theme.borders.radius[(wrap && aslink) ? 'xs' : 'base']};
  color: ${({ primary, secondary, theme }) =>
    primary || secondary ? theme.fonts.color.text.inverted : theme.fonts.color.text.base};

  font-style: ${({ theme }) => theme.fonts.style.base};

  font-family: ${({ primary, secondary, theme }) =>
    primary || secondary ? theme.fonts.family.base.bold : theme.fonts.family.base.semiBold};
  font-weight: ${({ primary, secondary, theme }) =>
    primary || secondary ? theme.fonts.weight.bold : theme.fonts.weight.semiBold};
  line-height: ${({ small, theme }) => theme.buttons.font.lineHeight[small ? 'sm' : 'base']}px;

  ${({ basic, backgroundcolor, grouped, plain, primary, secondary, theme, wrap }) =>
    !grouped &&
    !plain &&
    !wrap &&
    `
    &:hover {
      background-color: ${(theme.colors?.[backgroundcolor] ?? backgroundcolor) ?? primary
      ? theme.colors.backgrounds.button.primary.hover
      : secondary
        ? theme.colors.backgrounds.button.secondary.hover
        : basic
          ? theme.colors.backgrounds.button.basic.hover
          : theme.colors.backgrounds.button.base.hover
    };
    }
  `}

  ${({ loading }) => loading && `
    cursor: wait;
  `}

  ${({ loading }) =>
    !loading &&
    `
    &:hover {
      cursor: pointer;
    }
  `}
`;

const base = css<StyleProps>`
  ${shared}
  font-size: ${({ theme }) => theme.fonts.size.base};
  padding: ${({ aslink, basic, grouped, plain, theme, wrap }) =>
    !plain &&
    (wrap
      ? 0
      : aslink
        ? basic
          ? 0
          : '2px 4px'
        : grouped
          ? basic
            ? 0
            : theme.buttons.padding.xxs
          : theme.buttons.padding.base)};
`;

export const sm = css<StyleProps>`
  ${shared}

  font-size: ${({ theme }) => theme.fonts.size.sm};
  padding: ${({ aslink, basic, grouped, plain, theme, tag, wrap }) =>
    !plain && !wrap &&
    (typeof tag !== 'undefined'
      ? theme.buttons.padding.sm
      : aslink
        ? basic
          ? 0
          : '2px 4px'
        : grouped
          ? basic
            ? 0
            : theme.buttons.padding.xxs
          : theme.buttons.padding.sm)};

  ${({ grouped, tag, theme }) =>
    typeof tag !== 'undefined' &&
    !grouped &&
    `
    height: ${theme.buttons.font.lineHeight.sm + 2 * theme.padding.base + 2}px;
    padding-bottom: 0;
    padding-top: 0;
  `}

  ${({ basic, grouped, plain, theme, wrap }) =>
    grouped &&
    !basic &&
    !plain &&
    !wrap &&
    `
    border-radius: ${theme.borders.radius.sm};
  `}
`;

export default base;
