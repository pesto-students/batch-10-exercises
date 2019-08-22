/* eslint-disable no-prototype-builtins */


function RequestValidationError(property) {
  const errorMessage = `Invalid request header: Invalid ${property}`;
  return new Error(errorMessage);
}

const validators = {
  isValidVersion() {
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    return validVersions.includes(this.version);
  },

  isValidMethod() {
    const validRequestMethods = ['GET', 'POST', 'DELETE'];
    return validRequestMethods.includes(this.method);
  },

  isValidURI() {
    const isEmpty = (string) => string === '';
    const isAsterick = (string) => string === '*';
    const isValidResourceAddress = (address) => {
      const alphaNumericWithPeriodsRegex = /^([a-zA-Z0-9])+([a-zA-Z0-9.])+([a-zA-Z0-9])$/g;
      return !!address.match(alphaNumericWithPeriodsRegex);
    };
    return !isEmpty(this.uri) && (isAsterick(this.uri) || isValidResourceAddress(this.uri));
  },

  isValidMessage() {
    const specialCharacters = ['<', '>', '\\', '&', '"', "'"];
    const messageCharacters = this.message.split('');
    const isSpecialCharacter = (character) => specialCharacters.includes(character);
    return !messageCharacters.some(isSpecialCharacter);
  },
};


function requestValidator(request) {
  Object.assign(request, validators);
  if (!request.hasOwnProperty('method') || !request.isValidMethod()) {
    throw new RequestValidationError('Method');
  }
  if (!request.hasOwnProperty('uri') || !request.isValidURI()) {
    throw new RequestValidationError('URI');
  }
  if (!request.hasOwnProperty('message') || !request.isValidMessage()) {
    throw new RequestValidationError('Message');
  }
  if (!request.hasOwnProperty('version') || !request.isValidVersion()) {
    throw new RequestValidationError('Version');
  }

  return request;
}

export {
  requestValidator,
};
