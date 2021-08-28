
function build () {
  case "$1" in
    build)
      pushd frontend
      yarn build
      popd
      mkdir -p backend/public
      cp -r frontend/build/* backend/public
      ;;
    clean)
      echo "cleaning up backend/public"
      rm -rf backend/public/*
      ;;
    *)
      echo "nothing to do, bye .."
      ;;
  esac
}

[ -z "$1" ] && build "build" || build "$1"

