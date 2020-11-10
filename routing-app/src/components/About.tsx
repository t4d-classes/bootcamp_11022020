import React from "react";
import {
  useParams,
  useHistory,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

export const About = () => {
  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  const routeMatch = useRouteMatch();

  console.log(routeMatch.path);

  return (
    <div>
      About {id}
      <br />
      <br />
      <button type="button" onClick={() => history.push("/")}>
        Go Home
      </button>
      <Switch>
        <Route path={routeMatch.path + "/mission"}>
          <div>Mission</div>
        </Route>
        <Route path={routeMatch.path + "/team"}>
          <div>Team</div>
        </Route>
        <Route path={routeMatch.path + "/history"}>
          <div>History</div>
        </Route>
      </Switch>
    </div>
  );
};
