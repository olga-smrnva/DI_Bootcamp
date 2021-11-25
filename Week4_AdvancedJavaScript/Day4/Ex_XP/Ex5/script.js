// Analyze the options below.

class Dog {
	constructor(name) {
		this.name = name;
	}
};

// Which constructor will successfully extend the Dog class?

// 1
class Labrador extends Dog {
	constructor(name, size) {
		this.size = size;
	}
  };
  
  
// 2

// This is the right code to extend the Dog class
  class Labrador extends Dog {
	constructor(name, size) {
		super(name);
		this.size = size;
	}
  };
  
  
// 3
  class Labrador extends Dog {
	constructor(size) {
		super(name);
		this.size = size;
	}
  };
  
  
// 4
  class Labrador extends Dog {
	constructor(name, size) {
		this.name = name;
		this.size = size;
	}
  };