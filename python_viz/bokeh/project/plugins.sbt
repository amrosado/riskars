addSbtPlugin("com.untyped" % "sbt-js" % "0.7")

libraryDependencies ++= Seq(
    "org.jgrapht" % "jgrapht-ext" % "0.9.0",
    "com.google.javascript" % "closure-compiler" % "v20131014") // TODO: "v20140625"

scalacOptions ++= Seq("-Xlint", "-deprecation", "-unchecked", "-feature", "-language:postfixOps")
