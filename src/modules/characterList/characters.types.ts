// Todo:
// In this case, this would make more sense to be a characters module
// chracterList is only one part of the characters logic

// Usually we group all types by module as well,
// while the types folder u created in src/
// is for some global app types (global objects,
// external common entities, or some overall app stuff)
// that dont really go under any of the modules


// On that note, component props and stuff that are more connected 
// to the component rendering logic, should stay grouped inside
// the component file, above component declaration
export interface ICharacter {
  // ...
}
