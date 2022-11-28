class Room {
  constructor(params) {
    this.colorSelect = params?.colorSelect ?? false;
    this.brightnessSelect = params?.brightnessSelect ?? false;
    this.powerSelect = params?.powerSelect ?? false;
    this.smartSelect = params?.smartSelect ?? false;
    this.sunlightSelect = params?.sunlightSelect ?? false;
    this.windowSelect = params?.windowSelect ?? false;
    this.humidifierSelect = params?.humidifierSelect ?? false;
    this.humidifierAdjustmentSelect = params?.humidifierAdjustmentSelect ?? false;
  }

  toObject() {
    return {
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
