import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

// Define validation rule types
interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'email' | 'custom';
  message: string;
  value?: number | string | RegExp;
  validator?: (value: string) => boolean;
}

@customElement('muza-input-field')
export class MuzaInputField extends LitElement {
  // Generic props object that accepts any properties
  @property({ type: Object })
  props: Record<string, unknown> = {};

  @state() private validationMessage: string = '';

  static styles = css`
    :host {
      --input-color: var(--muza-primary-text-color, #333333);
      --input-bg: var(--muza-input-bg, #ffffff);
      --input-border: var(--muza-border-color, #a9a9a9);
      --input-border-radius: var(--muza-border-radius-sm, 4px);
      --input-placeholder: var(--muza-tertiary-text-color, #aaa);
      --input-focus-border: var(--muza-secondary-text-color, #5f5f5f);
      --input-disabled-bg: var(--muza-input-disabled-bg, #f3f4f6);
      --input-error-border: var(--muza-input-error-border, #e53935);
      --input-success-border: var(--muza-input-success-border, #4caf50);
      --input-label-color: var(--muza-secondary-text-color, #5f5f5f);
      --input-helper-color: var(--muza-tertiary-text-color, #aaa);

      display: block;
      font-family: inherit;
      margin-bottom: var(--muza-spacing-md, 12px);
    }

    .input-container {
      position: relative;
    }

    label {
      display: block;
      margin-bottom: var(--muza-spacing-xs, 4px);
      font-size: var(--muza-secondary-font-size, 12px);
      font-weight: var(--muza-font-weight-medium, 500);
      color: var(--input-label-color);
    }

    input {
      width: 100%;
      padding: 0.625rem 0.75rem;
      font-size: var(--muza-primary-font-size, 14px);
      color: var(--input-color);
      background-color: var(--input-bg);
      border: 1px solid var(--input-border);
      border-radius: var(--input-border-radius);
      box-sizing: border-box;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    input::placeholder {
      color: var(--input-placeholder);
    }
    input:focus {
      outline: none;
      border-color: var(--input-focus-border);
      box-shadow: 0 0 0 1px var(--input-focus-border);
    }
    input:disabled {
      background-color: var(--input-disabled-bg);
      cursor: not-allowed;
      opacity: 0.5;
    }

    .helper-text {
      margin-top: var(--muza-spacing-xs, 4px);
      font-size: var(--muza-secondary-font-size, 12px);
      color: var(--input-helper-color);
    }

    /* States */
    input.error {
      border-color: var(--input-error-border);
    }
    input.error:focus {
      box-shadow: 0 0 0 1px var(--input-error-border);
    }
    input.success {
      border-color: var(--input-success-border);
    }
    input.success:focus {
      box-shadow: 0 0 0 1px var(--input-success-border);
    }
    .helper-text.error {
      color: var(--input-error-border);
    }
    .helper-text.success {
      color: var(--input-success-border);
    }

    /* Sizes */
    input.small {
      padding: 0.4rem 0.5rem;
      font-size: calc(var(--muza-primary-font-size, 14px) - 2px);
    }
    input.large {
      padding: 0.75rem 1rem;
      font-size: calc(var(--muza-primary-font-size, 14px) + 2px);
    }

    /* Icons */
    .leading-icon,
    .trailing-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: var(--input-placeholder);
      pointer-events: none;
    }
    .leading-icon {
      left: 0.75rem;
    }
    .trailing-icon {
      right: 0.75rem;
    }
    input.has-leading-icon {
      padding-left: 2.5rem;
    }
    input.has-trailing-icon {
      padding-right: 2.5rem;
    }
  `;

  private _validateInput(
    value: string,
    validationRules?: ValidationRule[]
  ): { isValid: boolean; message: string } {
    if (!validationRules || validationRules.length === 0) {
      return { isValid: true, message: '' };
    }

    for (const rule of validationRules) {
      switch (rule.type) {
        case 'required':
          if (!value || value.trim() === '') {
            return { isValid: false, message: rule.message };
          }
          break;
        case 'minLength':
          if (typeof rule.value === 'number' && value.length < rule.value) {
            return { isValid: false, message: rule.message };
          }
          break;
        case 'maxLength':
          if (typeof rule.value === 'number' && value.length > rule.value) {
            return { isValid: false, message: rule.message };
          }
          break;
        case 'pattern':
          if (rule.value instanceof RegExp && !rule.value.test(value)) {
            return { isValid: false, message: rule.message };
          }
          break;
        case 'email': {
          // Fixed: Added block scope with curly braces
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            return { isValid: false, message: rule.message };
          }
          break;
        }
        case 'custom':
          if (rule.validator && !rule.validator(value)) {
            return { isValid: false, message: rule.message };
          }
          break;
      }
    }

    return { isValid: true, message: '' };
  }

  private _spreadAttributes(attrs: Record<string, unknown>): string {
    return Object.entries(attrs)
      .map(([key, value]) => {
        if (typeof value === 'boolean') {
          // For boolean attributes
          return value ? key : null;
        } else if (typeof value === 'function' && key.startsWith('on')) {
          // Convert onEvent to @event handlers
          const eventName = key.substring(2).toLowerCase();
          this.addEventListener(eventName, value as EventListener);
          return null;
        } else if (value != null) {
          // For regular attributes
          return `${key}="${value}"`;
        }
        return null;
      })
      .filter(Boolean)
      .join(' ');
  }

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    const newValue = input.value;

    // Store the new value in props
    this.props = { ...this.props, value: newValue };

    // Get validation rules from props
    const validationRules = this.props.validationRules as
      | ValidationRule[]
      | undefined;

    // Perform validation
    const { isValid, message } = this._validateInput(newValue, validationRules);

    // Update validation state
    this.validationMessage = message;

    // Update the state in props for visual styling
    if (validationRules && validationRules.length > 0) {
      this.props = {
        ...this.props,
        state: isValid ? (newValue ? 'success' : 'default') : 'error',
        helperText: message || this.props.helperText,
      };
    }

    // Dispatch event with validation status
    this.dispatchEvent(
      new CustomEvent('input-change', {
        detail: {
          value: newValue,
          name: this.props.name,
          isValid,
          validationMessage: message,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    // Extract props with defaults
    const {
      label = '',
      required = false,
      name = '',
      leadingIcon = '',
      type = 'text',
      value = '',
      placeholder = '',
      disabled = false,
      state = 'default',
      size = 'medium',
      trailingIcon = '',
      helperText = '',
      // _validationRules = [],
      ...rest
    } = this.props;

    return html`
      <div class="input-wrapper">
        ${label
          ? html`<label for="input-${name}"
              >${label}
              ${required ? html`<span class="required">*</span>` : ''}</label
            >`
          : ''}
        <div class="input-container">
          ${leadingIcon
            ? html`<span class="leading-icon"
                ><i class="fa-solid fa-${leadingIcon}"></i
              ></span>`
            : ''}
          <input
            id="input-${name}"
            type="${type}"
            .value="${value}"
            name="${name}"
            placeholder="${placeholder}"
            ?required="${required}"
            ?disabled="${disabled}"
            class="${state} ${size} ${leadingIcon
              ? 'has-leading-icon'
              : ''} ${trailingIcon ? 'has-trailing-icon' : ''}"
            @input="${this._handleInput}"
            ${this._spreadAttributes(rest)}
          />
          ${trailingIcon
            ? html`<span class="trailing-icon"
                ><i class="fa-solid fa-${trailingIcon}"></i
              ></span>`
            : ''}
        </div>
        ${this.validationMessage || helperText
          ? html`<div class="helper-text ${state}">
              ${this.validationMessage || helperText}
            </div>`
          : ''}
      </div>
    `;
  }
}
