export class Mode {
  constructor(
    selectedColor,
    selectedBrightness,
    openedPower,
    openedSmart,
    openedSunlight,
    openedSunlight,
    openedWindow,
    openedHumidifier,
    selectedHumidity
  ) {
    this.selectedColor = selectedColor ?? "";
    this.selectedBrightness = selectedBrightness ?? 0;
    this.openedPower = openedPower ?? false;
    this.openedSmart = openedSmart ?? false;
    this.openedSunlight = openedSunlight ?? false;
    this.openedWindow = openedWindow ?? false;
    this.openedHumidifier = openedHumidifier ?? false;
    this.selectedHumidity = selectedHumidity ?? 0;
  }
}
