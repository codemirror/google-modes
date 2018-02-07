// test: open

void foo() {
  Type [def&local usertype_plain];
  Type* [def&local usertype_lstar];
  Type *[def&local usertype_rstar];
  const Type& [def&local usertype_lref];
  const Type &[def&local usertype_rref];
  int [def&local basictype_plain];
  int* [def&local basictype_lstar];
  int *[def&local basictype_rstar];
  const int& [def&local basictype_lref];
  const int &[def&local basictype_rref];
  Type [def&local equals_usertype_plain] = 1;
  Type* [def&local equals_usertype_lstar] = 1;
  Type *[def&local equals_usertype_rstar] = 1;
  const Type& [def&local equals_usertype_lref] = 1;
  const Type &[def&local equals_usertype_rref] = 1;
  int [def&local equals_basictype_plain] = 1;
  int* [def&local equals_basictype_lstar] = 1;
  int *[def&local equals_basictype_rstar] = 1;
  const int& [def&local equals_basictype_lref] = 1;
  const int &[def&local equals_basictype_rref] = 1;
  Type [def&local constructor_usertype_plain](1);
  Type* [def&local constructor_usertype_lstar](1);
  Type *[def&local constructor_usertype_rstar](1);
  const Type& [def&local constructor_usertype_lref](1);
  const Type &[def&local constructor_usertype_rref](1);
  int [def&local constructor_basictype_plain](1);
  int* [def&local constructor_basictype_lstar](1);
  int *[def&local constructor_basictype_rstar](1);
  const int& [def&local constructor_basictype_lref](1);
  const int &[def&local constructor_basictype_rref](1);
  Type [def&local initializer_usertype_plain]{1};
  Type* [def&local initializer_usertype_lstar]{1};
  Type *[def&local initializer_usertype_rstar]{1};
  const Type& [def&local initializer_usertype_lref]{1};
  const Type &[def&local initializer_usertype_rref]{1};
  int [def&local initializer_basictype_plain]{1};
  int* [def&local initializer_basictype_lstar]{1};
  int *[def&local initializer_basictype_rstar]{1};
  const int& [def&local initializer_basictype_lref]{1};
  const int &[def&local initializer_basictype_rref]{1};
  LOG << [variable-2 equals_basictype_rstar] <<
      [variable-2 equals_basictype_lref] <<
      [variable-2 equals_basictype_rref] <<
      [variable-2 constructor_usertype_plain] <<
      [variable-2 constructor_usertype_lstar] <<
      [variable-2 constructor_usertype_rstar] <<
      [variable-2 constructor_usertype_lref] <<
      [variable-2 constructor_usertype_rref] <<
      [variable-2 constructor_basictype_plain] <<
      [variable-2 constructor_basictype_lstar] <<
      [variable-2 constructor_basictype_rstar] <<
      [variable-2 constructor_basictype_lref] <<
      [variable-2 constructor_basictype_rref] <<
      [variable-2 initializer_usertype_plain] <<
      [variable-2 initializer_usertype_lstar] <<
      [variable-2 initializer_usertype_rstar] <<
      [variable-2 initializer_usertype_lref] <<
      [variable-2 initializer_usertype_rref] <<
      [variable-2 initializer_basictype_plain] <<
      [variable-2 initializer_basictype_lstar] <<
      [variable-2 initializer_basictype_rstar] <<
      [variable-2 initializer_basictype_lref] <<
      [variable-2 initializer_basictype_rref];
}

void foo() {
  [type Type] usertype_plain;
  [type Type]* usertype_lstar;
  [type Type] *usertype_rstar;
  const [type Type]& usertype_lref;
  const [type Type] &usertype_rref;
  int basictype_plain;
  int* basictype_lstar;
  int *basictype_rstar;
  const int& basictype_lref;
  const int &basictype_rref;
  [type Type] equals_usertype_plain = 1;
  [type Type]* equals_usertype_lstar = 1;
  [type Type] *equals_usertype_rstar = 1;
  const [type Type]& equals_usertype_lref = 1;
  const [type Type] &equals_usertype_rref = 1;
  int equals_basictype_plain = 1;
  int* equals_basictype_lstar = 1;
  int *equals_basictype_rstar = 1;
  const int& equals_basictype_lref = 1;
  const int &equals_basictype_rref = 1;
  [type Type] constructor_usertype_plain(1);
  [type Type]* constructor_usertype_lstar(1);
  [type Type] *constructor_usertype_rstar(1);
  const [type Type]& constructor_usertype_lref(1);
  const [type Type] &constructor_usertype_rref(1);
  int constructor_basictype_plain(1);
  int* constructor_basictype_lstar(1);
  int *constructor_basictype_rstar(1);
  const int& constructor_basictype_lref(1);
  const int &constructor_basictype_rref(1);
  [type Type] initializer_usertype_plain{1};
  [type Type]* initializer_usertype_lstar{1};
  [type Type] *initializer_usertype_rstar{1};
  const [type Type]& initializer_usertype_lref{1};
  const [type Type] &initializer_usertype_rref{1};
  int initializer_basictype_plain{1};
  int* initializer_basictype_lstar{1};
  int *initializer_basictype_rstar{1};
  const int& initializer_basictype_lref{1};
  const int &initializer_basictype_rref{1};
}
