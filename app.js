 const express = require('express');
 var app = express();

 app.all('/', (req, res, next) => {
     res.json([{
         "Id": "sha256:59ae33d548321312b81c94bcea0f7e0c5694b79c9014bdbbf67fe55fc1c04b0c",
         "RepoTags": [
             "pragra-git:latest",
             "pragra/pragra-git:l.0",
             "pragra/pragra-git:latest"
         ],
         "RepoDigests": [
             "pragra/pragra-git@sha256:9b483a3ac5b219e02cd60b8caf5837aa8e86061580d4c4b3a38cf2e3f194fa82"
         ],
         "Parent": "sha256:3f53bb00af943dfdf815650be70c0fa7b426e56a66f5e3362b47a129d57d5991",
         "Comment": "",
         "Created": "2019-01-03T02:47:27.3136164Z",
         "Container": "3689610e369ed7d34508ba8aa0de52ea5af1a3f3eff8295c2042b33f30f5ab17",
         "ContainerConfig": {
             "Hostname": "3689610e369e",
             "Domainname": "",
             "User": "",
             "AttachStdin": true,
             "AttachStdout": true,
             "AttachStderr": true,
             "Tty": true,
             "OpenStdin": true,
             "StdinOnce": true,
             "Env": [
                 "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
             ],
             "Cmd": [
                 "/bin/sh"
             ],
             "Image": "alpine",
             "Volumes": null,
             "WorkingDir": "",
             "Entrypoint": null,
             "OnBuild": null,
             "Labels": {}
         },
         "DockerVersion": "18.03.1-ce",
         "Author": "",
         "Config": {
             "Hostname": "3689610e369e",
             "Domainname": "",
             "User": "",
             "AttachStdin": true,
             "AttachStdout": true,
             "AttachStderr": true,
             "Tty": true,
             "OpenStdin": true,
             "StdinOnce": true,
             "Env": [
                 "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
             ],
             "Cmd": [
                 "/bin/sh"
             ],
             "Image": "alpine",
             "Volumes": null,
             "WorkingDir": "",
             "Entrypoint": null,
             "OnBuild": null,
             "Labels": {}
         },
         "Architecture": "amd64",
         "Os": "linux",
         "Size": 20713934,
         "VirtualSize": 20713934,
         "GraphDriver": {
             "Data": {
                 "LowerDir": "/var/lib/docker/overlay2/37e393a3d3a7a1a09f09f5b1cd2934d183ba974f0776c8443fd194bc60738d87/diff",
                 "MergedDir": "/var/lib/docker/overlay2/940d1c5e69d1beca9236834768d325502c7e22e0974e9ea6d4633784c1da8854/merged",
                 "UpperDir": "/var/lib/docker/overlay2/940d1c5e69d1beca9236834768d325502c7e22e0974e9ea6d4633784c1da8854/diff",
                 "WorkDir": "/var/lib/docker/overlay2/940d1c5e69d1beca9236834768d325502c7e22e0974e9ea6d4633784c1da8854/work"
             },
             "Name": "overlay2"
         },
         "RootFS": {
             "Type": "layers",
             "Layers": [
                 "sha256:7bff100f35cb359a368537bb07829b055fe8e0b1cb01085a3a628ae9c187c7b8",
                 "sha256:5577307cfd324dfb4457f6bbad83ccc0e248f4cba464a9c52fb79ed6b69b9c56"
             ]
         },
         "Metadata": {
             "LastTagTime": "2019-01-03T02:54:33.0796756Z"
         }
     }]);
 });

 app.listen(3000, () => {
     console.log('App listening on port 3000!');
 });