import React, { useState } from "react";
import T from "prop-types";
import { Canvas3D, Group3DFacade, ListFacade } from "troika-3d";
import { UIBlock3DFacade } from "troika-3d-ui";
import Globe from "./Globe";
import XRGrabbable from "./XRGrabbable";
import ConnectionsFacade from "./ConnectionsFacade";
import cities from "./cities.json";
import { Matrix4 } from "three";

const gripSpaceTransform = new Matrix4()
  .makeRotationX(Math.PI / -2)
  .setPosition(0, 0.02, -0.17);

const GlobeConnectionsExample = (props) => {
  const [refs, setRefs] = useState({});
  const _onFacadeRef = (name, facade) => {
    // this.refs[name] = facade;
    refs[name] = facade;
  };
  const [screen, setScreen] = useState({
    w: 0,
    h: 0,
  });
  const handleResize = () => {
    setScreen({
      w: window.innerWidth,
      h: window.innerHeight,
    });
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      //   onMouseMove={_onMouseMove}
      className="flex flex-col items-center  pers"
    >
      <Canvas3D
        antialias
        stats={true}
        width={1000}
        height={screen.h - 200}
        lights={[
          {
            type: "ambient",
          },
          {
            type: "directional",
            x: 0,
            y: 0,
            z: 1,
          },
        ]}
        objects={[
          // Spinning globe - wrapped to make it grabbable by an XR hand controller
          {
            facade: XRGrabbable,
            transition: {
              grabbedAmount: { duration: 500, easing: "easeOutExpo" },
            },
            x: -0.15,
            z: -0.5,
            gripSpaceTransform,
            children: {
              key: "globe",
              facade: Globe,
              ref: (e) => {
                _onFacadeRef("globe", e);
              },
              scale: 0.075,
              pointerEvents: true,
              animation: {
                from: { rotateY: -Math.PI },
                to: { rotateY: Math.PI },
                duration: 24000,
                iterations: Infinity,
              },
            },
          },

          // Scrollable list of cities:
          {
            facade: UIBlock3DFacade,
            x: 0.3,
            y: 0.1,
            z: props.vr ? -0.5 : -0.9,
            rotateY: Math.PI / -16,
            width: 0.25,
            height: 0.3,
            fontSize: 0.012,
            flexDirection: "column",
            children: [
              {
                facade: UIBlock3DFacade,
                padding: [0.005, 0.01],
                backgroundColor: 0x333333,
                borderRadius: [0.005, 0.005, 0, 0],
                flexDirection: "row",
                justifyContent: "space-between",
                children: ["City", "Population"],
              },
              {
                facade: UIBlock3DFacade,
                flex: 1,
                overflow: "scroll",
                flexDirection: "column",
                backgroundColor: 0x444444,
                children: {
                  key: "cities",
                  ref: (e) => {
                    _onFacadeRef("cities", e);
                  },
                  facade: ListFacade,
                  data: cities,
                  template: {
                    key: (d, i) => i,
                    facade: UIBlock3DFacade,
                    lat: (d) => d.lat,
                    lng: (d) => d.lng,
                    padding: [0.005, 0.01],
                    hovering: false,
                    backgroundColor: null,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    pointerStates: {
                      hover: {
                        hovering: true,
                        backgroundColor: 0x444499,
                      },
                    },
                    children: (d) => [
                      d.city_ascii + ", " + d.country,
                      d.population.toLocaleString(),
                    ],
                  },
                },
              },
              /*{
                facade: UIBlock3DFacade,
                padding: 0.005,
                text: '',
                onAfterRender(renderer) {
                  const now = Date.now()
                  if (now - (this._lastStats || 0) > 500) {
                    this.text = 'Draw calls: ' + renderer.info.render.calls
                    this.afterUpdate()
                    this._lastStats = now
                  }
                }
              }*/
            ],
          },
          {
            // Container that manages syncing connection beziers to their endpoint object positions
            facade: ConnectionsFacade,
            objectRefs: refs,
          },
        ]}
      />
    </div>
  );
};

export default GlobeConnectionsExample;
