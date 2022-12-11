class Room {
  constructor(params) {
    this.modes = params?.modes ?? [];
    this.colorSelect = params?.colorSelect ?? {isAvailable: false, colors: []};
    this.brightnessSelect = params?.brightnessSelect ?? {isAvailable: false, brightnessLevel: 0};
    this.powerSelect = params?.powerSelect ?? {isAvailable: false, isEnabled: false};
    this.smartSelect = params?.smartSelect ?? {isAvailable: false, isEnabled: false};
    this.sunlightSelect = params?.sunlightSelect ?? {isAvailable: false, isEnabled: false};
    this.windowSelect = params?.windowSelect ?? {isAvailable: false, isEnabled: false};
    this.humidifierSelect = params?.humidifierSelect ?? {isAvailable: false, isEnabled: false};
    this.humidifierAdjustmentSelect = params?.humidifierAdjustmentSelect ?? {isAvailable: false, humidityLevel: 0};
  }

  toObject() {
    return {
      modes: this.modes,
      colorSelect: this.colorSelect,
      brightnessSelect: this.brightnessSelect,
      powerSelect: this.powerSelect,
      smartSelect: this.smartSelect,
      sunlightSelect: this.sunlightSelect,
      windowSelect: this.windowSelect,
      humidifierSelect: this.humidifierSelect,
      humidifierAdjustmentSelect: this.humidifierAdjustmentSelect
    }
  }
}

export default Room;
