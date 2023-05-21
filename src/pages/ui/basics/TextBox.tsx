import { CSSProperties, ChangeEvent, FormEvent, InputHTMLAttributes, LegacyRef, forwardRef } from "react"

export enum TextBoxTypes {
  /** Defines a TextBox for an e-mail address */
  email,
  /** Defines a TextBox for entering a number */
  number,
  /** Defines a password fiTextBoxeld */
  password,
  /** Defines a TextBox for entering a telephone number */
  phone,
  /** Defines a TextBox for entering a search string */
  search,
  /** Default. Defines a single-line string TextBox */
  text,
  /** Defines a TextBox for entering a URL */
  url
}

export enum TextDirections {
  /** Let the browser figure out the text direction, based on the content (only recommended if the text direction is unknown) */
  auto,
  /** Default. Left-to-right text direction */
  ltr,
  /** Right-to-left text direction */
  rtl
}

export interface TextBoxProps {
  /** Specifies a shortcut key to activate/focus the TextBox */
  accessKey?: string
  /** Specifies one or more classnames for the TextBox (refers to a class in a style sheet) */
  className?: string
  /** Specifies a unique id for the TextBox */
  id?: string
  /** Specifies that the textBox should be disabled */
  isDisabled?: boolean
  /** Specifies whether the TextBox is draggable or not */
  isDraggable?: boolean
  /** Specifies whether the content of the TextBox is editable or not */
  isEditable?: boolean
  /** Specifies that the TextBox should automatically get focus when the page loads */
  isFocusedOnLoad?: boolean
  /** Specifies that the TextBox is not yet, or is no longer, relevant */
  isHidden?: boolean
  /** Specifies that the TextBox is read-only */
  isReadOnly?: boolean
  /** Specifies that an the TextBox must be filled out before submitting the form */
  isRequired?: boolean
  /** Specifies the language of the TextBox's content */
  language?: string
  /** Specifies the maximum number of characters allowed in the TextBox */
  maxLength?: number
  /** Specifies the maximum value for the TextBox */
  maxValue?: string | number
  /** Specifies the minimum number of characters allowed in the TextBox */
  minLength?: number,
  /** Specifies the minimum value for the TextBox */
  minValue?: string | number
  /** Specifies the name of the TextBox */
  name?: string
  /** callback event that triggers when the value in the TextBox has changed */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  /** callback event that triggers when the value in the TextBox was tested to be invalid during form submission*/
  onInvalid?: (e: FormEvent<HTMLInputElement>) => void
  /** callback event that triggers when the value in the TextBox has changed but failed some rules (works if pattern attribute is set) */
  onValueInvalid?: (e: TextBoxValueInvalidEvent) => void
  /** Specifies the id of the form the TextBox belongs to */
  parentFormId?: string
  /** Specifies a regular expression that the TextBox's value is checked against */
  pattern?: RegExp
  /** Specifies a short hint that describes the expected value of the TextBox */
  placeholder?: string
  /** provides a reference to the input DOM element */
  ref?: LegacyRef<HTMLInputElement>
  /** Specifies the width, in characters, of the TextBox */
  size?: number
  /** Specifies the interval between legal numbers in the textBox */
  step?: number
  /** Specifies an inline CSS style for the TextBox */
  style?: CSSProperties
  /** Specifies the tabbing order of the TextBox */
  tabIndex?: number
  /** Specifies the text direction for the content in the TextBox */
  textDirection?: TextDirections,
  /** Specifies extra information about the TextBox */
  title?: string
  /** Specifies the type of TextBox to use */
  type?: TextBoxTypes
  /** Specifies whether the TextBox should have autocomplete enabled */
  useAutoComplete?: boolean
  /** Specifies whether the TextBox is to have its spelling and grammar checked or not */
  useSpellCheck?: boolean
  /** Specifies whether the content of the TextBox should be translated or not */
  useTranslation?: boolean
  /**  Specifies the value of the TextBox */
  value?: string
}

export interface TextBoxValueInvalidEvent {
  originalEvent: ChangeEvent<HTMLInputElement>
  target: EventTarget & HTMLInputElement
  reason: 'pattern_failed' | 'minlength' | 'maxlength' | 'nan' | 'minvalue' | 'maxvalue'
}

/** A react based TextBox */
const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(({
  accessKey,
  className,
  id,
  isDisabled,
  isDraggable,
  isEditable,
  isFocusedOnLoad,
  isHidden,
  isReadOnly,
  isRequired,
  language,
  maxLength,
  maxValue,
  minLength,
  minValue,
  name,
  onChange,
  onInvalid,
  parentFormId,
  pattern,
  placeholder,
  size,
  step,
  style,
  tabIndex,
  textDirection,
  title,
  type = TextBoxTypes.text,
  useAutoComplete,
  useSpellCheck,
  useTranslation,
  value
}, ref) => {

  const inputProps: InputHTMLAttributes<HTMLInputElement> = {
    accessKey,
    autoComplete: useAutoComplete ? 'on' : undefined,
    autoFocus: isFocusedOnLoad,
    className,
    contentEditable: isEditable,
    dir: textDirection ? TextDirections[textDirection] : undefined,
    draggable: isDraggable,
    disabled: isDisabled,
    form: parentFormId,
    hidden: isHidden,
    id,
    lang: language,
    max: maxValue,
    maxLength,
    min: minValue,
    minLength,
    name,
    onChange,
    onInvalid,
    pattern: pattern?.toString(),
    placeholder,
    readOnly: isReadOnly,
    required: isRequired,
    size,
    spellCheck: useSpellCheck,
    step: step ? step : 'any',
    style,
    tabIndex,
    title,
    translate: useTranslation === undefined ? undefined : useTranslation === true ? 'yes' : 'no',
    type: type === undefined ? undefined : type === TextBoxTypes.phone ? 'tel' : TextBoxTypes[type],
    value
  }
  return <input ref={ref} {...inputProps} />
});

TextBox.displayName = "TextBox"

export default TextBox;
