// eslint-disable-next-line no-unused-vars
function ValidateEmailId (entry) {

  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(entry))
  {
    return true;
  } else {
    return false;
  }
}

// eslint-disable-next-line no-unused-vars
function ValidatePhoneNumber (entry) {

  if (/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(entry))
  {
    return true;
  } else {
    return false;
  }
}

// eslint-disable-next-line no-unused-vars
function ValidateName (entry) {
  if (/^[\\p{L} .'-]+$/.test(entry))
  {
    return true;
  } else {
    return false;
  }
}