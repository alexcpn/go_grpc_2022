FROM envoyproxy/envoy:v1.22.5
RUN apt-get update
COPY envoy.yaml /etc/envoy.yaml
CMD /usr/local/bin/envoy -c /etc/envoy.yaml