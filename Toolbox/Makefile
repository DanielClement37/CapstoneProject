#project variables

PROJECT_NAME ?= Toolbox

.PHONY: migrations db hello

migrations:
		cd ./Toolbox.Data && dotnet ef --startup-project ../Toolbox.Api/ migrations add $(mname) && cd ..

db:
		cd ./Toolbox.Data && dotnet ef --startup-project ../Toolbox.Api/ database update && cd ..
api:
		cd ./Toolbox.Api && dotnet build && dotnet run && cd ..
hello:
		echo 'hello!'
