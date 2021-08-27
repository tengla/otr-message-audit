
case "$1" in
  arm)
  docker build --platform linux/amd64 -t otr-db -f Dockerfile.arm .
  ;;
  x86_64)
  docker build --platform linux/amd64 -t otr-db .
  ;;
esac
