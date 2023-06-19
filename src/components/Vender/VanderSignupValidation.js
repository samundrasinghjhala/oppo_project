

function validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.gstNo === "") {
        error.gstNo = "GST No Should not be empty"
    }
    if (values.email === "") {
        error.email = "Email Should not be empty"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Enter the vaild Email"
    }
    if (values.password === "") {
        error.password = "password Should not be empty"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Enter Password Pattern (A-Z, a-z, 0-9)"
    }
    return error;
}
export default validation;
