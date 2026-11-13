import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type PrimaryButtonIcon = 'none' | 'leading' | 'trailing';

@Component({
  selector: 'ui-primary-button',
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryButton {
  readonly label = input.required<string>();
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly icon = input<PrimaryButtonIcon>('none');
  readonly disabled = input(false);

  protected readonly iconSrc = computed(() =>
    this.icon() === 'leading'
      ? 'assets/icons/icon-add.svg'
      : this.icon() === 'trailing'
        ? 'assets/icons/icon-arrow-forward.svg'
        : null,
  );
}
