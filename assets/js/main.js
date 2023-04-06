const showHiddenPassword = (loginPassword, loginEye) => {
  const input = document.getElementById(loginPassword),
      iconEye = document.getElementById(loginEye)
  
      iconEye.addEventListener('click', () => {
        // change password to text
        if (input.type === 'password') {
          // switch to text
          input.type = 'text'

          // change icon
          iconEye.classList.add('ri-eye-line')
          iconEye.classList.remove('ri-eye-off-line')
        } else {
          input.type = 'password'

          // change icon
          iconEye.classList.remove('ri-eye-line')
          iconEye.classList.add('ri-eye-off-line')
        }
      })
}

showHiddenPassword('login-password', 'login-eye')