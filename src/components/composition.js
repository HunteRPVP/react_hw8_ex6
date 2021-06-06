export function createProgrammer(name) {
  const programmer = { name };

  return {
    ...programmer,
    ...canCode(programmer),
  };
}

function canCode({ name }) {
  return {
    code: () => console.log(name, "is coding..."),
  };
}

export function createFrontend(name) {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...canAngular(programmer),
    ...canReactAndVue(programmer),
  };
}

function canAngular({ name }) {
  return {
    angular: () => console.log(name, "is creating Angular app..."),
  };
}

export function createBackend(name) {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...canNodejs(programmer),
  };
}

function canNodejs({ name }) {
  return {
    nodejs: () => console.log(name, "is programming on Node JS..."),
  };
}

export function createFullstack(name) {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...canAngular(programmer),
    ...canNodejs(programmer),
  };
}

export function canReactAndVue({ name }) {
  return {
    react: () => console.log(name, "is creating React app..."),
    vue: () => console.log(name, "is creating Vue app..."),
  };
}
