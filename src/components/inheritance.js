export class Programmer {
  constructor(name) {
    this.name = name;
  }

  code() {
    console.log(this.name, "is coding...");
  }
}

export class Frontend extends Programmer {
  angular() {
    console.log(this.name, "is creating Angular app...");
  }
}

export class Backend extends Programmer {
  nodejs() {
    console.log(this.name, "is programming on Node JS...");
  }
}

export class Fullstack extends Frontend {
  nodejs() {
    console.log(this.name, "is programming on Node JS...");
  }
}
