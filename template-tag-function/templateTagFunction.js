
const  templateTagFunction = {
  callTemplateTagFunction : () => {
    const string = 'should escape ", <, >, & when tagged template is passed';
    return escape(string);
  },
}

export {
  templateTagFunction,
};
