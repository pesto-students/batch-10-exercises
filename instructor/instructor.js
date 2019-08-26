const instructor = {
  firstName: 'Ankeeth',
  sayHi() {
    setTimeout(() => {
      this.firstName = 'Ram';
    }, 1000);
  },
};

export { instructor };
