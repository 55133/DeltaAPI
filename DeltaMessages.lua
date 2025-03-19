local HttpService = game:GetService("HttpService")
local url = "https://raw.githubusercontent.com/55133/DeltaAPI/main/messages.json"
local success, responseData = pcall(function()
	return HttpService:GetAsync(url)
end)


if success then
	local responses = HttpService:JSONDecode(responseData)
	print(responses)
	game.Players.PlayerAdded:Connect(function(player)
		warn("player joined")
		player.Chatted:Connect(function(message)
			warn("player chatted")
			message = message:lower()
			warn(message)
			for keyword, response in pairs(responses) do
				if string.find(message, keyword) then
					print(response)
					game:GetService("Chat"):Chat(game.Workspace.Delta.Head, response, Enum.ChatColor.Red)
					print(response)
					break
				end
			end
		end)
	end)
else
	warn("Failed to fetch responses: " .. responseData)
end
