<!DOCTYPE HTML>
<!--
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Contact Me</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	</head>
	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Header -->
					<header id="header">
						<a href="index.html" class="logo">Joel Smith</a>
					</header>

				<!-- Nav -->
				<div id="top">
					<nav id="nav">
						<ul class="links">
							<li><a href="index.html#top">Projects</a></li>
							<li><a href="resume.html#top">Resume</a></li>
							<li class="active"><a href="contactme.html#top">Contact Me</a></li>
						</ul>
						<ul class="icons">
							<li><a href="https://www.linkedin.com/in/joel-smith-31b54690/" class="icon brands fa-linkedin"><span class="label">Instagram</span></a></li>
							<li><a href="https://github.com/joelsmith2226/" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
						</ul>
					</nav>
				</div>
				<!-- Main -->
					<div id="main">
						<!-- Post -->
						<section class="post feature">
								<form method="post" action="contact-form.php">
									<div class="fields">
										<div class="field">
											<label for="name">Name</label>
											<input type="text" name="name" id="name" />
										</div>
										<div class="field">
											<label for="email">Email</label>
											<input type="text" name="email" id="email" />
										</div>
										<div class="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="3"></textarea>
										</div>
									</div>
									<ul class="actions">
										<li><input type="submit" name="submit-mail" value="Send Message" /></li>
									</ul>
									<script language="JavaScript">
										var frmvalidator  = new Validator("contactform");
										frmvalidator.addValidation("name","req","Please provide your name");
										frmvalidator.addValidation("email","req","Please provide your email");
										frmvalidator.addValidation("email","email",
										  "Please enter a valid email address");
									</script>
								</form>
							</section>
					</div>

				<!-- Footer -->
					<footer id="footer">
						<section>
							<form method="post" action="#">
								<div class="fields">
									<div class="field">
										<label for="name">Name</label>
										<input type="text" name="name" id="name" />
									</div>
									<div class="field">
										<label for="email">Email</label>
										<input type="text" name="email" id="email" />
									</div>
									<div class="field">
										<label for="message">Message</label>
										<textarea name="message" id="message" rows="3"></textarea>
									</div>
								</div>
								<ul class="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</form>
						</section>
						<section class="split contact">
							<section class="alt">
								<h3>Address</h3>
								<p>1234 Somewhere Road #87257<br />
								Nashville, TN 00000-0000</p>
							</section>
							<section>
								<h3>Phone</h3>
								<p><a href="#">(000) 000-0000</a></p>
							</section>
							<section>
								<h3>Email</h3>
								<p><a href="#">info@untitled.tld</a></p>
							</section>
							<section>
								<h3>Social</h3>
								<ul class="icons">
									<li><a href="https://www.linkedin.com/in/joel-smith-31b54690/" class="icon brands fa-linkedin"><span class="label">Instagram</span></a></li>
									<li><a href="https://github.com/joelsmith2226/" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
								</ul>
							</section>
						</section>
					</footer>

				<!-- Copyright -->
					<div id="copyright">
						<ul><li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
					</div>

			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>
