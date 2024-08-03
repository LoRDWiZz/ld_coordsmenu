function SendReactMessage(action, data)
  SendNUIMessage({
    action = action,
    data = data
  })
end

local function toggleNuiFrame(shouldShow)
  SetNuiFocus(shouldShow, shouldShow)
  SendReactMessage('setVisible', shouldShow)
end

RegisterCommand('coords', function()
  toggleNuiFrame(true)
end)

RegisterNUICallback('hideFrame', function(_, cb)
  toggleNuiFrame(false)
  cb({})
end)

RegisterNUICallback('copyVector2', function(data, cb)
  local coords = GetEntityCoords(PlayerPedId())
  local vectorString = string.format("vector2(%f, %f)", coords.x, coords.y)
  cb(vectorString)
  toggleNuiFrame(false)
end)

RegisterNUICallback('copyVector3', function(data, cb)
  local coords = GetEntityCoords(PlayerPedId())
  local vectorString = string.format("vector3(%f, %f, %f)", coords.x, coords.y, coords.z)
  cb(vectorString)
  toggleNuiFrame(false)
end)

RegisterNUICallback('copyVector4', function(data, cb)
  local coords = GetEntityCoords(PlayerPedId())
  local heading = GetEntityHeading(PlayerPedId())
  local vectorString = string.format("vector4(%f, %f, %f, %f)", coords.x, coords.y, coords.z, heading)
  cb(vectorString)
  toggleNuiFrame(false)
end)

RegisterNUICallback('copyHeading', function(data, cb)
  local heading = GetEntityHeading(PlayerPedId())
  local vectorString = string.format("%f", heading)
  cb(vectorString)
  toggleNuiFrame(false)
end)

RegisterNUICallback('closeMenu', function(data)
  toggleNuiFrame(false)
end)