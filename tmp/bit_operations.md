

isLocalhost = OR(
  window.location.hostname
  [
    'localhost'
    '[::1]'
  ]
)

# `!!=` -- NOT
window.location.hostname = window.location.hostname !!= [
  'localhost'
  '[::1]'
]
